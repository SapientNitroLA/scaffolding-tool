/* jshint quotmark: false */
MGMRI.extend( 'data' );
MGMRI.data = {
    propertyId: '66964e2b-2550-4476-84c3-1a4c0c5c067f',
    twitterHandle : '@mgmGrand',
    sessionTimeout: 1800,
    sessionWarning: 1500,
    lang: 'en',
    accounts: {
        tierData: {
            Sapphire: {
                displayText: "Sapphire",
                minCredits: "20000",
                currentTier: "1",
                image: {
                    x1: "services/dummyimage/304x202",
                    x2: "services/dummyimage/608x404"
                },
                progressText: "{{rem_pts}} to advance to Sapphire",
                tirePerkInfo: "<ul>\n<li>Discounts to events</li>\n<li>Presale to shows</li>\n<li>Access to exclusive seats</li>\n</ul>\n",
                maxLevel: "false",
                nextTier: "Pearl"
            },
            Pearl: {
                displayText: "Pearl",
                minCredits: "30000",
                currentTier: "2",
                image: {
                    x1: "services/dummyimage/304x202",
                    x2: "services/dummyimage/608x404"
                },
                progressText: "{{rem_pts}} credits to advance to Pearl",
                tirePerkInfo: "<ul>\n<li>Discounts to events</li>\n<li>Presale to shows</li>\n<li>Access to exclusive seats</li>\n</ul>\n",
                maxLevel: "false",
                nextTier: "Gold"
            },
            Gold: {
                displayText: "Gold",
                minCredits: "40000",
                currentTier: "3",
                image: {
                    x1: "services/dummyimage/304x202",
                    x2: "services/dummyimage/608x404"
                },
                progressText: "{{rem_pts}} to advance to pearl",
                tirePerkInfo: "<ul>\n<li>Discounts to events</li>\n<li>Presale to shows</li>\n<li>Access to exclusive seats</li>\n</ul>\n",
                maxLevel: "false",
                nextTier: "Platinum"
            },
            Platinum: {
                displayText: "Platinum",
                minCredits: "50000",
                currentTier: "4",
                image: {
                    x1: "services/dummyimage/304x202",
                    x2: "services/dummyimage/608x404"
                },
                progressText: "<b>Invitation by only</b> points to advance to Platinum",
                tirePerkInfo: "<ul>\n<li>Discounts to events</li>\n<li>Presale to shows</li>\n<li>Access to exclusive seats</li>\n</ul>\n",
                maxLevel: "false",
                nextTier: "Noir"
            },
            Noir: {
                displayText: "Noir",
                minCredits: "60000",
                currentTier: "5",
                image: {
                    x1: "services/dummyimage/304x202",
                    x2: "services/dummyimage/608x404"
                },
                progressText: "{{rem_pts}} points to advance to Noir",
                tirePerkInfo: "<ul>\n<li>Discounts to events</li>\n<li>Presale to shows</li>\n<li>Access to exclusive seats</li>\n</ul>\n",
                maxLevel: "true",
                nextTier: ""
            }
        }
    },
    booking: {
        room: {
            soldOut: 'Sold Out',
            notValidRange: 'Please select a valid date range'
        },
        ticketing: {
            soldOut: 'No Performances'
        },
        itinerary: "../../pageComponents/itinerary/",
        home: "../en.html"
    },
    calendar: {
        maxNights       : 14,
        minMonths       : 4,
        maxMonths       : 13,
        errors: {
            arrive              : 'There are no arrivals for this date',
            out                 : 'Your selection includes a date that is sold-out',
            min                 : 'The maximum number of days you may stay is {num}',
            max                 : 'The maximum number of days you may stay is {num}',
            offerMin            : 'The minimum number of days you may stay for this offer is {num}',
            offerMax            : 'The maximum number of days you may stay for this offer is {num}',
            offerInvalidDates   : 'You can choose only offer nights for your stay'
        }
    },
    date: {
        day: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        abbrDay: [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ],
        month: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        abbrMonth: [
            'JAN',
            'FEB',
            'MAR',
            'APR',
            'MAY',
            'JUN',
            'JUL',
            'AUG',
            'SEP',
            'OCT',
            'NOV',
            'DEC'
        ]
    },
    dateRangeOffCanvas: {
        calendarMonthsLimit: 3,
        defaultDateRange: 7
    },
    // Required on any template that can trigger a Dining off-canvas
    dining: {
        daysTabsLimit: 4,
        calendarDaysLimit: 90,
        calendarMonthsLimit: 3,
        soldOut: 'Restaurant Closed',
        redirectTo: {
            itinerary: '/dmpweb/itinerary/en/v1/dining/add',
            dining: '/dmpweb/diningbooking/en/v1/reserve'
        },
        validation: {
            guestInfoForm: {
                rules: {
                    email: {
                        required: true,
                        emailtld: true,
                        maxlength: 100
                    },
                    'first-name': {
                        required: true,
                        maxlength: 32
                    },
                    'last-name': {
                        required: true,
                        maxlength: 32
                    },
                    phone: {
                        required: false,
                        minlength: 10,
                        maxlength: 20,
                        validPhoneNoState: true
                    }
                }
            },
            mLifeLoginForm: {
                rules: {
                    email: {
                        required: true,
                        emailtld: true,
                        maxlength: 100
                    },
                    password: 'required'
                }
            }
        }
    },
    microdataSchema: {
        offersFilter: {
            hotel: 'room',
            entertainment: 'entertainment',
            dining: 'restaurant',
            nightlife: 'nightlife'
        },
        itemtype: {
            offer: 'http://schema.org/Offer',
            room: 'http://schema.org/ProductModel',
            entertainment: 'http://schema.org/Event',
            restaurant: 'http://schema.org/Restaurant',
            nightlife: 'http://schema.org/NightClub'
        }
    },
    navigation: {
        widget: {
            calendar: {
                months: 14
            },
            mlifeSignIn: {
                rules: {
                    'customerEmail': {
                        required: true,
                        emailtld: true
                    },
                    'password': {
                        required: true
                    }
                },
                messages: {
                    'customerEmail': {
                        required: 'This field is required',
                        email: 'Incorrectly formatted Email Address',
                        emailtld: 'Incorrectly formatted Email Address'
                    },
                    'password': {
                        required: 'This field is required'
                    }
                }
            }
        }
    },
    operatingTime: {
        operatingHours: [
            {
                'day': '0',
                'closed': 'false',
                'open24Hours': 'true',
                'firstopeninghours': '115',
                'firstopeninghourstext': '5:15 PM',
                'firstclosinghours': '615',
                'firstclosinghourstext': '10:15 PM',
                'secondopeninghours': '',
                'secondopeninghourstext': '',
                'secondclosinghours': '',
                'secondclosinghourstext': ''
            },
            {
                'day': '1',
                'closed': 'false',
                'open24Hours': 'true',
                'firstopeninghours': '100',
                'firstopeninghourstext': '5:00 PM',
                'firstclosinghours': '630',
                'firstclosinghourstext': '10:30 PM',
                'secondopeninghours': '',
                'secondopeninghourstext': '',
                'secondclosinghours': '',
                'secondclosinghourstext': ''
            },
            {
                'day': '2',
                'closed': 'false',
                'open24Hours': 'false',
                'firstopeninghours': '1700',
                'firstopeninghourstext': '9:00 AM',
                'firstclosinghours': '500',
                'firstclosinghourstext': '9:00 PM',
                'secondopeninghours': '',
                'secondopeninghourstext': '',
                'secondclosinghours': '',
                'secondclosinghourstext': ''
            },
            {
                'day': '3',
                'closed': 'false',
                'open24Hours': 'false',
                'firstopeninghours': '1300',
                'firstopeninghourstext': '5:00 AM',
                'firstclosinghours': '1800',
                'firstclosinghourstext': '10:00 AM',
                'secondopeninghours': '',
                'secondopeninghourstext': '',
                'secondclosinghours': '',
                'secondclosinghourstext': ''
            },
            {
                'day': '4',
                'closed': 'false',
                'open24Hours': 'true',
                'firstopeninghours': '100',
                'firstopeninghourstext': '5:00 PM',
                'firstclosinghours': '630',
                'firstclosinghourstext': '10:30 PM',
                'secondopeninghours': '',
                'secondopeninghourstext': '',
                'secondclosinghours': '',
                'secondclosinghourstext': ''
            },
            {
                'day': '5',
                'closed': 'false',
                'open24Hours': 'true',
                'firstopeninghours': '100',
                'firstopeninghourstext': '5:00 PM',
                'firstclosinghours': '730',
                'firstclosinghourstext': '11:30 PM',
                'secondopeninghours': '',
                'secondopeninghourstext': '',
                'secondclosinghours': '',
                'secondclosinghourstext': ''
            },
            {
                'day': '6',
                'closed': 'false',
                'open24Hours': 'false',
                'firstopeninghours': '100',
                'firstopeninghourstext': '5:00 PM',
                'firstclosinghours': '730',
                'firstclosinghourstext': '11:30 PM',
                'secondopeninghours': '',
                'secondopeninghourstext': '',
                'secondclosinghours': '',
                'secondclosinghourstext': ''
            }
        ],
        utcOffset: -8
    },
    siteSearchParams: {
        pageLength: '10',
        cookieNames: 'searchCookie1,searchCookie2,searchCookie4,searchCookie3',
        additionalParams : {
            staticDomain : 'mgmassets.com',
            cache : 'cache'
        }
    },
    siteSearchOfferParams: {
        offersPrefix: 'en',
        offersParams: 'value1|value2'
    },
    smsSignUp: {
        formId: '1116',
        formName: 'cellphone_offers',
        clientId: '401',
        postUrl: 'http://mgmlv.g.aug.me/xform'
    },
    urls: {
        booking: {
            itinerary   : '../itineray',
            room        : '../bookingRoom/',
            ticketing   : '../bookingTicketing/',
            reserve     : '../bookingBookall/#step3'
        },
        accounts : {
            profile: '../accountsSummaryTemplate/index.html',
            signin : '../accountsPrimaryTemplate/index.html'
        }

    },
    validation: {
        defaults: {
            messages: {
                required: 'This field is required.',
                remote: 'Please fix this field.',
                email: 'Please enter a valid email address.',
                url: 'Please enter a valid URL.',
                date: 'Please enter a valid date.',
                number: 'Please enter a valid number.',
                creditcardExtended: 'Please enter a valid credit card number.',
                equalTo: 'Please enter the same value again.',
                maxlength: 'Please enter no more than {0} characters.',
                minlength: 'Please enter at least {0} characters.',
                rangelength: 'Please enter a value between {0} and {1} characters long.',
                range: 'Please enter a value between {0} and {1}.',
                max: 'Please enter a value less than or equal to {0}.',
                min: 'Please enter a value greater than or equal to {0}.',
                validPhoneNoState: 'Invalid phone number',
                emailtld: 'Please enter a valid email address.',
                partnerValidate: 'Please provide a valid partner number.',
                validExpirationDate: 'Invalid Expiration Date',
                zipcodeUS: 'The specified US ZIP Code is invalid',
                postalCodeCA: 'Please specify a valid postal code',
                upNoShows: 'Shows may not be purchased with Union Pay. Please select a different payment method to proceed.'
            },
            generalErrorMessage: 'Sorry, {num} errors prevented from being submitted. Please correct any errors below.',
        }
    }
};