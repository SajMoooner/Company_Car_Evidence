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
  zaciatok: string;
  koniec: string;
  date:string;
  km:number;
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
}

export class DetailsListBasicPracovnaCesta extends React.Component<{}, IDetailsListBasicExampleState> {
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
        zaciatok: 'Žilina',
        koniec: "Beluša",
        date: "29.09.2022",
        km: 55
      });
    }

    this._allItems.push({ key : "Udrz" , zaciatok:"Beluša",koniec:"Žilina",date: "29.09.2022",km: 55})
    this._allItems.push({ key : "Udrz" , zaciatok:"Bratislava",koniec:"Žilina",date: "14.09.2022",km: 198})
    this._allItems.push({ key : "Udrz" , zaciatok:"Žilina",koniec:"Bratislava",date: "14.09.2022",km: 198})


    this._columns = [
        { key: 'column1', name: 'Zaciatok', fieldName: 'zaciatok', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Koniec', fieldName: 'koniec', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'Vzdialenosť', fieldName: 'km', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Dátum', fieldName: 'date', minWidth: 100, maxWidth: 200, isResizable: true }
      ];
  

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
        return '1 item selected: ' + (this._selection.getSelection()[0] as IDetailsListBasicExampleItem).zaciatok;
      default:
        return `${selectionCount} items selected`;
    }
  }

  private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    this.setState({
      items: text ? this._allItems.filter(i => i.zaciatok.toLowerCase().indexOf(text) > -1) : this._allItems,
    });
  };


}
