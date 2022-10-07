import * as React from 'react';
import styles from './AcAuta.module.scss';
import { IAcAutaProps } from './IAcAutaProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { CompoundButton } from 'office-ui-fabric-react/lib/components/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import { DatePicker } from '@fluentui/react/lib/DatePicker';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import { ActionButton, Dropdown, DropdownMenuItemType, IColumn, IDropdownOption, IIconProps, IStackStyles, IStackTokens, Label, mergeStyles, PrimaryButton, Stack } from '@fluentui/react';
import {DropzoneArea, DropzoneDialog} from 'material-ui-dropzone'
import { DetailsListBasicTankovanie } from './detailListTankovanie';
import { PotrdTankovanie } from './potvrdTankovanie';


const stackItemStyles = mergeStyles({
  alignItems: 'center',
  color: DefaultPalette.white,
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  width: 200,
});


const stackStyles: IStackStyles = {
  root: {
    width: 800,
  },
};


const numericalSpacingStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};


const options: IDropdownOption[] = [
  { key: 'čerpačky', text: 'Stanice', itemType: DropdownMenuItemType.Header },
  { key: 'shell', text: 'Shell' },
  { key: 'slovnaft', text: 'Slovnaft' }
];

const options1: IDropdownOption[] = [
  { key: 'čerpačky', text: 'Mesta', itemType: DropdownMenuItemType.Header },
  { key: 'kk', text: 'Kežmarok' },
  { key: 'bb', text: 'Beluša' }
];


const iconProps1 = { iconName: 'StreetsideSplitMinimize' };
const iconProps2 = { iconName: 'MaximumValue' };
const iconProps3 = { iconName: 'Money' };

export default class Tankovania extends React.Component<IAcAutaProps, {}> {
 
  constructor(props: IAcAutaProps) {
    super(props);
   
    };


  public render(): React.ReactElement<IAcAutaProps> {
    const {
      description
    } = this.props;

    return (
        <div>
    
          <Stack tokens={numericalSpacingStackTokens}>
          <DatePicker
              firstDayOfWeek={DayOfWeek.Monday}
              placeholder="Zvoľ dátum"
              label="Dátum tankovania"
          />

          <Dropdown
          placeholder="Vyber čerpaciu stanicu"
          label="Čerpacia stanica"
          options={options}
          />
          
          <Dropdown
          placeholder="Vyber Mesto"
          label="Mesto"
          options={options1}
          />

          

          <TextField label="Stav pred natankovaním " placeholder="Zadaj celkový počet v litroch pred natankovaním"  iconProps={iconProps1} />
          <TextField label="Litre" placeholder="Zadaj natankované litre" iconProps={iconProps2} />
          <TextField label="Cena" placeholder="Zadaj celkovú sumu" iconProps={iconProps3}/>
          <Label>Vlož sken bločku </Label>
          <DropzoneArea></DropzoneArea>

          <PotrdTankovanie></PotrdTankovanie>
        
          <DetailsListBasicTankovanie></DetailsListBasicTankovanie>
          </Stack>

        </div>
      
    );
  }
}
