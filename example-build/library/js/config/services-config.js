MGMRI.extend( 'services' );
MGMRI.services = {
    resultsGrid: {
        default                     : '../../services/resultsGrid',
        mlife                       : '../../services/mlifeGrid'
    },
    booking: {
        room: {
            calendar                : '../../services/booking/room/availability/rate',
            nonRateCalendar         : '../../services/booking/room/availability',
            roomList                : '../../services/booking/room/availability/list',
            roomDetail              : '../../services/booking/room/availability/detail/{roomTypeId}',
            offers                  : '../../services/booking/room/package/list',
            iata                    : '../../services/booking/room/validatetravelagent',
            itinerary               : '../../services/booking/ticketing/itinerary',
            addRoom                 : '../../services/booking/room/addroom',
            review                  : '../../services/booking/room/review',
            reserve                 : '../../services/booking/room/reserve',
            remove                  : '../../services/booking/room/remove',
            login                   : '../../services/booking/room/login',
            bookRoom                : '../../services/booking/room/price'
        },
        show: {
            calendar                : '../../services/booking/ticketing/availability',
            showList                : '../../services/booking/ticketing/availability/list',
            showDetail              : '../../services/booking/ticketing/detail/{showId}',
            releaseShow             : '../../services/booking/ticketing/release',
            offers                  : '../../services/booking/ticketing/package/list',
            itinerary               : '../../services/booking/ticketing/itinerary',
            showBuy                 : '../../services/booking/ticketing/buy',
            requestTime             : '../../services/booking/ticketing/requestTime',
            seatmap                 : '../../services/booking/ticketing/seatmap',
            empty                   : '../../services/booking/ticketing/map-availability-empty.json',
            hold                    : '../../services/booking/ticketing/hold',
            release                 : '../../services/booking/ticketing/release',
            extendHold              : '../../services/booking/ticketing/hold'
        },
        all: {
            remove                  : '../../services/booking/room/remove',
            addRoom                 : '../../services/booking/room/addroom',
            removeShow              : '../../services/booking/ticketing/remove',
            releaseShow             : '../../services/booking/ticketing/release',
            requestTime             : '../../services/booking/ticketing/requestMoreTime',
            review                  : '../../services/booking/all/review',
            reserve                 : '../../services/booking/all/reserve',
            login                   : '../../services/booking/all/login',
            sendComponents          : '../../services/booking/all/sendComponents',
            continueAsGuest         : '../../services/booking/all/continueAsGuest',
            itinerary               : '../../services/booking/ticketing/itinerary'
        },
        session: {
            itinerary               : '../../services/booking/ticketing/itinerary',
            extendSession           : '../../services/booking/all/extendSession'
        }
    },
    dining : {
        calendar                    : '../../services/dining/restaurant/calendar',
        reservation                 : '../../services/dining/restaurant/getAvailability',
        schedule                    : '../../services/dining/restaurant/getSchedule',
        saveToItinerary             : '../../services/dining/restaurant/getAvailability',
        save                        : '../../services/dining/restaurant/getAvailability',
        sendVerification            : '../../services/accounts/success.json'
    },
    detail: {
        offer                       : '../../services/offerDetail/eligibility'
    },
    accounts : {
        signIn                      : '../../services/accounts/signIn/sign-in-response.json',
        resendVerification          : '../../services/accounts/success.json',
        activate                    : '../../services/accounts/success.json',
        activateByMoreInfo          : '../../services/accounts/success.json',
        activateWebAccount          : '../../services/accounts/success.json',
        resendLink                  : '../../services/accounts/resendLink',
        findReservation             : '../../services/accounts/findReservation',
        onloadUnauthPreferences     : '../../services/accounts/onloadUnauthPreferences',
        saveUnauthProfile           : '../../services/accounts/saveUnauthProfile',
        savePreferences             : '../../services/accounts/success.json',
        signUp                      : '../../services/accounts/success.json',
        managePreferSendEmail       : '../../services/accounts/success.json',
        managePreferAddInfo         : '../../services/accounts/success.json',
        getSecurityQuestion         : '../../services/accounts/signIn/security-question.json',
        submitSecretanswer          : '../../services/accounts/submitSecretanswer',
        resetPassword               : '../../services/accounts/success.json',
        signUpExistingAccount       : '../../services/accounts/success.json',
        accountSummaryItineraries   : '../../services/itinerary/print/print-item.json',
        accountSummaryTaxInfo       : '../../services/accounts/accountSummary/taxinfo/data.json',
        summaryProfile              : '../../services/accounts/signIn/sign-in-response.json',
        editProfile                 : '../../services/accounts/signIn/sign-in-response.json',
        logout                      : '../../services/itinerary/itineraries/itineraries.json', //dummy url
        userDetails                 : '../../services/accounts/userDetails/data.json',
        verifyActivate              : '../../services/accounts/success.json',
        submitSecretAnswer          : '../../services/accounts/success.json',
        updateProfile               : '../../services/accounts/signIn/sign-in-response.json',
        profilePreferences          : '../../services/accounts/accountSummary/preferences/data.json',
        loadPreferences             : '../../services/accounts/accountSummary/preferences/data.json',
        GuestBookPreferences        : '../../services/accounts/success.json',
        populateUserDetails         : '../../services/itinerary/confirmation/confirmation.json',
        timeout                     : '../../services/booking/all/extendSession'
    },
    itinerary: {
        itineraries                 : '../../services/itinerary/itineraries/itineraries.json',
        cancel                      : '../../services/itinerary/cancelReservation/index.php',
        remove                      : '../../services/itinerary/removeItem/data.json',
        currentPrice                : '../../services/itinerary/showPrice/data.json',
        addMlife                    : '../../services/itinerary/addToMlife/index.php',
        viewTicket                  : '../../services/itinerary/itineraries/view-tickets-details.json',
        buyTicket                   : '../../services/itinerary/show/buy-tickets.json',
        bookAll                     : '../../services/itinerary/bookall/data.json',
        offers                      : '/mgm-web/offers/en/v1/all.sjson',
        reservationCount            : '../../services/itineraryCount.json',
        sendEmail                   : '../../services/itinerary/sendEmail/success.json',
        iCal                        : '../../services/itinerary/ical/calendar.ics'
    },
    confirmation: {
        cancel                      : '../../services/reservations/data.json',
        print                       : '/mgm-web/itinerary/en/v1/reservation.sjson',
        viewTicket                  : '../../services/itinerary/itineraries/view-tickets-details.json',
        confirmed                   : '../../services/itinerary/confirmation/confirmation.json',
        reservationCount            : '/mgm-web/itinerary/en/v1/count'
    },
    itineraryPrint: {
        print                       : '../../services/itinerary/print/print-item.json',
        printAll                    : '../../services/itinerary/confirmation/confirmation.json'
    },
    sitesearch: {
        searchService               : '../../services/siteSearch/search-results.json',
        searchOfferService          : '../../services/siteSearch/search-results-offers.json'
    },
    entertainment: {
        ticketAvailability          : '../../services/tickets/availability/{propertyId}',
        buyTickets                  : '../../services/tickets/buy/{propertyId}/{showId}'
    },
    comparisonTable : {
        all                         : '../../services/mlife-comparison/mlife-all.json'
    },
    offers                          : '../../services/offers/data.json',
    smsSignUp                       : '../../services/success.json'
};
