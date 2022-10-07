import { CompoundButton, TextField } from "@fluentui/react";
import * as React from "react";
import styles from "./AcAuta.module.scss";
import { IAcAutaProps } from "./IAcAutaProps";
import pnp from "sp-pnp-js";

export default class MojKomponent extends React.Component<IAcAutaProps, {}> {

    //------------V konštruktore načítaš propsi a inicializuje state------//
    constructor(props: IAcAutaProps) {
      super(props);
    }
  
    public render(): React.ReactElement<IAcAutaProps> {
    //-----------Tu dáš svoje html alebo fluent ui------------------------//
      return (
        <div>
            <p>HTML is best shit in the World</p>
            <p>And dont forget to use FLUENT UI you are not stupid, why would you use html </p>
            <CompoundButton primary secondaryText="Kliknete" disabled={false} checked={true} onClick={this.kliknutieTlacidla}>
                 Primary
           </CompoundButton>
           <TextField label="Meno " placeholder="Zadaj meno" onChange={this.zmenaInputu}/>
        </div>
      );
    }


// -----------------------Tu dáš svoje metódy-----------------------------//
// Vačšinou sa to volá BackEnd ale v reacte je všetko frontend
// Použiješ knižnicu SP-PNP-JS ,PNP/JS je moc kompikovaná preto použijem staršiu verziu
// Metodu difinuje takto public nazov funkcie (): void{}
// Metódu zavoláš v renderi a zavolá sa iba ked sa zmení state 
// Render sa volá len pri zmene statu


//-----------------------------Tlačidlo----------------------------------//
//Metoda sa vykoná sa stale po stlačení tlačidla nie prie rendere
    public kliknutieTlacidla():void {
      console.log("Vypisujem itemy v liste") 
      pnp.sp.web.lists.getByTitle("Test").items.get().then((items: any[]) => {
        items.forEach(element => {
         console.log(element.Title);
       });
    });
  }

//---------------------------Input--------------------------------------//
// Metoda sa vykona vždy pri zmene hodnoty 
    public zmenaInputu(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string):void{
      console.log(newValue);
    }

//------------------------Knižnica so sharepointom---------------------//
// Ako spojazdnit knižnicu 
// Nainštaluje npm i sp-pnp-js
// Dáš import
// Používaš normalne ako pnp knižnicu

//-----------------------CRUD v knižnici sp-pnp-js--------------------//

    //-------------------------------READ ----------------------------//
    /*
      pnp.sp.web.lists.getByTitle("Custom 1").items.get().then((items: any[]) => {
        items.forEach(element => {
        console.log(element.Title);
       });
    });
    */
    //-------------------------------DELETE --------------------------//
    /*
     pnp.sp.web.lists.getByTitle("Custom 1").items
        .getById(2)
        .delete().then(() => {
        console.log("List item deleted.");
      });
    }
    */
    //-------------------------------ADD ----------------------------//
    /*
      pnp.sp.web.lists
        .getByTitle("Custom 1").items
        .add({ Title: "New item added via code."})
        .then((value: ItemAddResult) => {
        console.log(value);
      });
    */
   //-------------------------------UPDATE -------------------------//
    /*
    pnp.sp.web.lists.getByTitle("Custom 1").items
      .getById(1)
      .update({Title: "Updated list item title"})
      .then(() => {
      console.log("List item updated.");
      });
    }
    */

    public vypisList():void{
      pnp.sp.web.lists.getByTitle("Test").items.get().then((items: any[]) => {
        items.forEach(element => {
         console.log(element.Title);
       });
    });
  }


}


  