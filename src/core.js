export default class dummyTexter {

    constructor() {
      this.questLists = {};

      // temp data, when have apis will remove
      this.name = [{"data":"Erica Romaguera"},{"data":"Caleigh Jerde"},{"data":"Lucas Schultz"},{"data":"Carole Marvin"},{"data":"Dorian Feeney"},{"data":"Nia Gutkowski"},{"data":"Woodrow Nikolaus"},{"data":"Jaquan Rolfson"}];
      this.address = [{"data":"728 Dooley Branch, Beckershire, LA 63598-2909"},{"data":"622 Dixie Path, South Tobinchester, UT 98336"},{"data":"20464 Hirthe Curve Suite, Emardton, CT 12471-4107"},{"data":"280 Suzanne Throughway, Breannabury, OR 45801"},{"data":"6803 Dickens Islands Apt. 567, Port Malikaview, TX 14942"},{"data":"655 Auer Garden Apt. 026, Wolffport, VA 80438-4929"},{"data":"97561 Gene Rest, North Audreanneville, CO 00498-2987"},{"data":"101 Purdy Lakes, West Jordanmouth, NH 38827-6100"}];
    }

    init() {
      this.prepareElements();      
    }

    prepareElements() {
      this.targets = Array.prototype.slice.call(document.querySelectorAll('[data-dummy]'));

      for (let i = 0; i < this.targets.length; i++) {
        let cat = this.stringToArray(this.targets[i].dataset.dummy)[0];
        
        if (this.questLists[cat] == undefined) {
          this.questLists[cat] = 1;
        } else {
          this.questLists[cat]++;
        }
      }

      this.getData();
    }

    stringToArray(str) {
      return str.split("-");
    }

    getData() {
      for (let key in this.questLists) {
        if (this.questLists.hasOwnProperty(key)) {
          this.ajax(key, this.questLists[key])
            .then((data)=>{
              this.fillContent(key,data);
            }).catch((error)=>{
              console.error(error.message);
            });
        }
      }
    }

    ajax(cat, count) {
      return new Promise((resolve, reject)=>{
        // temp, should be ajax call
        if (this[cat] !== undefined) {
          resolve(this[cat]);
        } else {
          reject({message:`dummyTexter: ${cat} is not a valid category`});
        }
      });
    }

    fillContent(cat,data) {
      let counter = 0;

      for (let i = 0; i < this.targets.length; i++) {
        let temp = this.stringToArray(this.targets[i].dataset.dummy);

        if (temp[0] === cat) {
          this.targets[i].innerHTML = data[counter++].data;
          this.targets.splice(i, 1);
        }

        if (counter >= data.length) {
          counter = 0;
        }
      }
    }
   
}
  