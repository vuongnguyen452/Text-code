import React, { Component } from 'react';
import Tpl from './component/Tbl'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  }
  componentDidMount() {
    fetch('https://data.ratp.fr/api/records/1.0/search/?rows=40&disjunctive.code_postal=true&sort=code_postal&start=80&dataset=liste-des-commerces-de-proximite-agrees-ratp&timezone=Asia%2FJakarta')
      .then((Response) => Response.json())
      .then((findres) => {
        console.log("findRes", findres.records)
        var sorts = []
        sorts = findres.records.map((sort) => {
          return sort.fields
        })
        console.log("sorts", sorts)
        this.setState({
          persons: sorts
        })
      })
  }
  dataSet = [
    ["VITRY-SUR-SEINE", " 94400", "Le Reinitas", "dimanche"],
    ["VITRY-SUR-SEINE", "94400", "Le Gitane", "lundi"],
    ["VITRY-SUR-SEINE", "94400", "Le Tabariot", "dimanche"],
    ["VITRY-SUR-SEINE", "94400", "Maxi Tabac", "dimanche"],
    ["VITRY-SUR-SEINE", "94400", "Café MILAN", "mercredi"],
    ["VITRY-SUR-SEINE", "94400", "Le Français", "dimanche"],
    ["VITRY-SUR-SEINE", "94400", "Victoria", "dimanche"],
    ["VITRY-SUR-SEINE", "94400", "Le Nemrod", "dimanche"],
    ["VITRY-SUR-SEINE", "94400", "Le Fontenoy", "lundi"],
    ["BRY-SUR-MARNE", "94360", "La Divette De Bry", "samedi"],
    ["BRY-SUR-MARNE", "94360", "Totem", "dimanche"],
    ["VILLIERS-SUR-MARNE", "94350", "Le Rallye", "dimanche"],
    ["VILLIERS-SUR-MARNE", "94350", "Tabac De La Gare", "dimanche"],
    ["JOIN-LE-PONT", "94340", "Le Join", "dimanche"],
    ["JOIN-LE-PONT", "94340", "Le Rocher Fleuri", "dimanche"],
    ["THIAIS", "94300", "Bar du Marché", "dimanche"],
    ["THIAIS", "94300", "Les Tilleuls", "dimanche"],
    ["ORLY", "94310", "Le Fer à Cheval", "lundi"],
    ["ORLY", "94310", "Tabac de La Gare", "samedi"],
    ["ORLY", "94310", "Le St-Exupéry", "dimanche"],
    ["VINCENNES", "94300", "Le Marigny", "dimanche"],
    ["VINCENNES", "94300", "Tabac De La Tourell", "mercredi"],
    ["VINCENNES", "94300", "Tabac des Rigollots", "dimanche"],
    ["VINCENNES", "94300", "Le Royal", "dimanche"],
    ["VINCENNES", "94300", "Le Drapeau", "dimanche"],
    ["LE KREMLIN-BICÊTRE", "9470", "Le Jean Bart", "dimanche"],
    ["LE KREMLIN-BICÊTRE", "9470", "Tabac La Plume Verte", "dimanche"],
    ["LE KREMLIN-BICÊTRE", "9470", "Le Marigny", "dimanche"],
    ["LE KREMLIN-BICÊTRE", "9470", "Zounina", "dimanche"],
    ["LE KREMLIN-BICÊTRE", "9470", "Tabac Brazza", "samedi"],
    ["FRESNES", "9460", "Le Diplomate", "dimanche"],
    ["FRESNES", "9460", "Librairie Peupleraie", "dimanche"],
    ["FRESNES", "9460", "La Cerisaie", "jeudi"]



  ]
  render() {
    console.log("pers", this.state.persons)
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Tpl data={this.dataSet}></Tpl>
      </div>
    );
  }

}

export default App;
