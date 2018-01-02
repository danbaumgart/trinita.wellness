import Moment from 'moment';
import {Units, Meridiem, Metrics} from './constants';

export class DateModel {
    constructor(dateTime) {
        this.day = dateTime.getDate();
        this.month = dateTime.getMonth();
        this.year = dateTime.getFullYear();
    }
    ToStandardDate() {
        return new DateTime.ToStandardDate(this, null);
    }
}
export class TimeModel {
    constructor(time) {
        this.hour = time.getHours();
        this.minute = time.getMinutes();
        this.second = time.getSeconds();
        this.millisecond = time.getMilliseconds();
    }
    ToStandardDate() {
        return new DateTime.ToStandardDate(null, this);
    }
    toMeridiemTime() {
        if (!this.isMeridiemFormat()) {
            this[Units.MERIDIEM] = this.hour >= 12 ? Meridiem.PM : Meridiem.AM;
            if (this[Units.MERIDIEM] === Meridiem.PM) this.hour -= 12;
        }
    }
    toMilitaryTime() {
        if (this.isMeridiemFormat()) {
            if (this[Units.MERIDIEM] === Meridiem.PM) this.hour += 12;
            delete this[Units.MERIDIEM];
        }
    }
    isMeridiemFormat() {
        return this.hasOwnProperty(Units.MERIDIEM);
    }
}
export class DateTime {
    constructor(data) {
        let timeModel, dateModel;
        if(!data){
            let standardDate = new Date();
            timeModel = new TimeModel(standardDate);
            dateModel = new DateModel(standardDate);
        }else if(DateTime.isStandardDate(data)){
            timeModel = new TimeModel(data);
            dateModel = new DateModel(data);
        } else if(DateTime.isDateModel(data)) {
            timeModel = new TimeModel(new Date());
            dateModel = data;
        } else if(DateTime.isTimeModel(data)) {
            timeModel = data;
            dateModel = new DateModel(new Date());
        } else if(DateTime.isDateTimeModel(data)){
            timeModel = data[Metrics.TIME];
            dateModel = data[Metrics.DATE];
        } else {
            let standardDate = new Date();
            timeModel = DateTime.hasTimeModelProperty(data) ? data[Metrics.TIME] : new TimeModel(standardDate);
            dateModel = DateTime.hasDateModelProperty(data) ? data[Metrics.DATE] : new DateModel(standardDate);
        }
        this.date = dateModel;
        this.time = timeModel;
    }
    static isStandardDate(date) {
        return date instanceof Date;
    }
    static isDateTimeModel(model) {
        return model instanceof DateTime;
    }
    static isTimeModel(model) {
        return model instanceof TimeModel;
    }
    static isDateModel(model) {
        return model instanceof DateModel;
    }
    static hasTimeModelProperty(data) {
        return data.hasOwnProperty(Metrics.TIME) && DateTime.isTimeModel(data[Metrics.TIME]);
    }
    static hasDateModelProperty(data) {
        return data.hasOwnProperty(Metrics.DATE) && DateTime.isDateModel(data[Metrics.DATE]);
    }
    ToMilitaryTime() {
        if(DateTime.isTimeModel(this.time)) this.time.ToMilitaryTime();
    }
    ToStandardDate() {
        if(DateTime.isDateModel(this.date) && DateTime.isTimeModel(this.time)){
            const {day, month, year} = this.date;
            const {hour, minute, second, millisecond} = this.time;
            return new Date(year, month, day, hour, minute, second, millisecond);
        }
    }
    static ToStandardDate(date, time) {
        const {day, month, year} = DateTime.isDateModel(date) ? date : DateTime.ToDateModel();
        const {hour, minute, second, millisecond} = DateTime.isTimeModel(time) ? time : DateTime.ToTimeModel();
        return new Date(year, month, day, hour, minute, second, millisecond);
    }
    static ToDateTimeModel(date, time) {
        const standardDate = DateTime.ToStandardDate(date, time);
        return new DateTime(standardDate);
    }
    static ToDateModel(date) {
        return date && DateTime.isStandardDate(date) ? new DateModel(date) : new DateModel(new Date());
    }
    static ToTimeModel(date) {
        return date && DateTime.isStandardDate(date) ? new TimeModel(date) : new TimeModel(new Date());
    }
}
