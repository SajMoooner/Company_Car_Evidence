import * as React from 'react';
import { Announced } from '@fluentui/react/lib/Announced';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { Text } from '@fluentui/react/lib/Text';

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px',
});

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };

export interface IDetailsListBasicExampleItem {
  key: string;
  typ: string;
  name: string;
  date:string;
  cena:number;
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
}

export class DetailsListBasicUdrzba extends React.Component<{}, IDetailsListBasicExampleState> {
  private _selection: Selection;
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];

  constructor(props: {}) {
    super(props);

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
    });

    // Populate with items for demos.
    this._allItems = [];
    for (let i = 0; i < 1; i++) {
    
      this._allItems.push({
        key: "Shell",
        typ: 'Umývanie auta',
        name: "Auto-umývareň",
        date: "21.09.2022",
        cena: Math.floor(Math.random() * (120 - 10) + 10)
      });
    }

    this._columns = [
        { key: 'column1', name: 'Typ údržby', fieldName: 'typ', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Miesto', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'Dátum', fieldName: 'date', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Cena', fieldName: 'cena', minWidth: 100, maxWidth: 200, isResizable: true }
      ];
  
      this._allItems.push({ key : "Udrz" , name:"Autoservis",typ:"Výmena oleja",date: "02.09.2022",cena: Math.floor(Math.random() * (120 - 10) + 10)})
      this._allItems.push({ key : "Udrz" , name:"Autoservis",typ:"Lakovanie dverí",date: "21.05.2022",cena: Math.floor(Math.random() * (120 - 10) + 10)})
      this._allItems.push({ key : "Udrz" , name:"Čerpacia stanica",typ:"Doplnenie vody do odstrekovača",date: "01.04.2022",cena: Math.floor(Math.random() * (120 - 10) + 10)})

    this.state = {
      items: this._allItems,
      selectionDetails: this._getSelectionDetails(),
    };
  }

  public render(): JSX.Element {
    const { items, selectionDetails } = this.state;

    return (
      <div>
        <div className={exampleChildClass}></div>

        
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={items}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
            
          />
        </MarqueeSelection>
      </div>
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as IDetailsListBasicExampleItem).name;
      default:
        return `${selectionCount} items selected`;
    }
  }

  private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    this.setState({
      items: text ? this._allItems.filter(i => i.name.toLowerCase().indexOf(text) > -1) : this._allItems,
    });
  };


}
