var dataModule = (function () {
    

   
})()


class TVShows {
        constructor(shows = []) {
            this.shows = shows;
            this.limit = 50;
        }

        addShow(newShow) {
            this.shows.push(newShow);
        }
    }

    class Show {
        constructor(name, image, id, details) {
            this.name = name;
            this.image = image;
            this.id = id;
            this.seasons = [];
            this.cast = [];
            this.details = details;
        }

        addActor(newActor) {
            this.cast.push(newActor);
        }

        addSeason(newSeason) {
            this.seasons.push(newSeason);
        }
    }

    class Cast {
        constructor(name) {
            this.name = name;
        }
    }

    class Season {
        constructor(startDate, endDate) {
            this.startDate = startDate;
            this.endDate = endDate;
        }
    }