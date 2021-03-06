/**
 * @classdesc Holds all the data for a ticket type. NOTE: there is not a separate object for each individual ticket.
 */
export class TicketType{
    /**
     *
     * @param {int}ticketTypeID
     * The ID of the ticket type. Generated by the database
     * @param {String}ticketTypenName
     * Name of the ticket type.
     * @param {int}price
     * The price of the ticket type.
     * @param {int}amount
     * How many tickets exist of this ticket type.
     * @param {String}releaseDate
     * The date when this ticket type gets released to the public. (yyyy-mm-dd)
     * @param {String}releaseTime
     * The time when this ticket type gets released to the public. (hh:mm)
     * @param {boolean}hasEndDate
     * Whether or not the ticket type should have an end date and end type.
     * @param {String}endDate
     * The date when the ticket type no longer will be available. (yyyy-mm-dd)
     * @param {String}endTime
     * The time when the ticket type no longer will be available. (hh:mm)
     * @param {String}description
     * A description of the ticket type.
     */
    constructor(ticketTypeID, ticketTypenName, price, amount, releaseDate, releaseTime, hasEndDate, endDate, endTime, description){
        this.ticketTypeID = ticketTypeID;
        this.ticketTypeName = ticketTypenName;
        this.price = price;
        this.amount = amount;
        this.releaseDate = releaseDate;
        this.releaseTime = releaseTime;
        this.hasEndDate = hasEndDate;
        if (hasEndDate){
            this.endDate = endDate;
            this.endTime = endTime;
        }
        else{
            this.endDate = null;
            this.endTime = null;
        }
        this.description = description;
    }

    static getTestTicketTypes(){
        let endingTicket = new TicketType(0, 'Roger',100, 150, '20200801', '2200', true, '20230218', '2300', 'VIP ståplasser');
        let nonEndingTicket = new TicketType(1, 'Mons',110, 2000, '20190202', '0000', false, null, null, 'Damn expensive tickets');
        return [endingTicket, nonEndingTicket];
    }
}