import * as React from 'react';
import styles from './AcAuta.module.scss';
import { IAcAutaProps, IAcAutaState } from './IAcAutaProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { CompoundButton } from 'office-ui-fabric-react/lib/components/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import { DatePicker } from '@fluentui/react/lib/DatePicker';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import { ActionButton, Dropdown, DropdownMenuItemType, IColumn, IDropdownOption, IIconProps, IStackStyles, IStackTokens, mergeStyles, Stack } from '@fluentui/react';
import Tankovania from './tankovanie';
import Udrzba from './udrzba';
import PracovnaCesta from './pracovnaCesta';
import MojeAuto from './mojeAuto';
import Report from './report';
import * as $ from 'jquery';
import Nadriadeny from './nadriadeny';

const itemStyles: React.CSSProperties = {
  alignItems: 'center',
  color: DefaultPalette.white,
  display: 'flex',
  height: 20,
  justifyContent: 'center',
  width: 200,
};

const stackStyles: IStackStyles = {
  root: {
    width: 900,
  },
};


const numericalSpacingStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

const addFriendIcon: IIconProps = { iconName: 'Car' };
const addFriendIcon1: IIconProps = { iconName: 'AccountManagement' };

export default class AcAuta extends React.Component<IAcAutaProps, IAcAutaState> {
 
  constructor(props: IAcAutaProps) {
    super(props);
    this._tankovanie = this._tankovanie.bind(this);
    this._udrzba = this._udrzba.bind(this);
    this._pracovnaCesta=this._pracovnaCesta.bind(this);
    this._mojeAuto = this._mojeAuto.bind(this);
    this._report = this._report.bind(this);
    this._nadriadeny = this._nadriadeny.bind(this);

    this.state = {
      tlacidloTankovanie:true,
      tlacidloUdrzba:false,
      tlacidloCest:false,
      tlacidloReport:false,
      tlacidloMOjeAuto:false,
      tlacidloNadriadeny:false
    }
   };


  public render(): React.ReactElement<IAcAutaProps> {
    const {
      description
    } = this.props;

    return (
      
        <div>
          <Stack horizontal styles={stackStyles} tokens={numericalSpacingStackTokens}>
            <CompoundButton  secondaryText="Pridanie a výpis tankovania" disabled={false} checked={true}  onClick={this._tankovanie}>
                  Tankovanie
            </CompoundButton>

            <CompoundButton id='test' secondaryText="Pridanie a výpis údržb" disabled={false} checked={true} onClick={this._udrzba}>
                  Údržba vozidla
              </CompoundButton>

              <CompoundButton  secondaryText="Pridanie pracovnej cesty" disabled={false} checked={true} onClick={this._pracovnaCesta}>
                  Pracovná cesta
              </CompoundButton>

            <CompoundButton  secondaryText="Mesačný report" disabled={false} checked={true} onClick={this._report}>
                Mesačný výkaz
            </CompoundButton>

            

            <Stack  tokens={verticalGapStackTokens}>
            <ActionButton iconProps={addFriendIcon} allowDisabledFocus disabled={false} checked={true} onClick={this._mojeAuto}>
              Moje auto
            </ActionButton>

            <ActionButton iconProps={addFriendIcon1} allowDisabledFocus disabled={false} checked={true} onClick={this._nadriadeny}>
              Nadriadený
            </ActionButton>
           </Stack>

          </Stack>   


          {this.state.tlacidloTankovanie && (<Tankovania description={''}></Tankovania>)}
          {this.state.tlacidloUdrzba && (<Udrzba description={''}></Udrzba>)}
          {this.state.tlacidloCest && (<PracovnaCesta description={''}></PracovnaCesta>)}
          {this.state.tlacidloReport && (<Report description={''}></Report>)}
          {this.state.tlacidloMOjeAuto && (<MojeAuto description={''}></MojeAuto>)}
          {this.state.tlacidloNadriadeny && (<Nadriadeny description={''}></Nadriadeny>)}
          </div>
      
    );
  }

  private _tankovanie():void{
    this.setState({tlacidloTankovanie:true})
    this.setState({tlacidloCest:false})
    this.setState({tlacidloUdrzba:false})
    this.setState({tlacidloReport:false})
    this.setState({tlacidloMOjeAuto:false})
    this.setState({tlacidloNadriadeny:false})
  }

  private _udrzba():void{
    this.setState({tlacidloTankovanie:false})
    this.setState({tlacidloCest:false})
    this.setState({tlacidloUdrzba:true})
    this.setState({tlacidloReport:false})
    this.setState({tlacidloMOjeAuto:false})
    this.setState({tlacidloNadriadeny:false})
  }

  private _pracovnaCesta():void{
    this.setState({tlacidloTankovanie:false})
    this.setState({tlacidloCest:true})
    this.setState({tlacidloUdrzba:false})
    this.setState({tlacidloReport:false})
    this.setState({tlacidloMOjeAuto:false})
    this.setState({tlacidloNadriadeny:false})
  }

  private _mojeAuto():void{
    this.setState({tlacidloTankovanie:false})
    this.setState({tlacidloCest:false})
    this.setState({tlacidloUdrzba:false})
    this.setState({tlacidloReport:false})
    this.setState({tlacidloMOjeAuto:true})
    this.setState({tlacidloNadriadeny:false})
  }
  private _report():void{
    this.setState({tlacidloTankovanie:false})
    this.setState({tlacidloCest:false})
    this.setState({tlacidloUdrzba:false})
    this.setState({tlacidloReport:true})
    this.setState({tlacidloMOjeAuto:false})
    this.setState({tlacidloNadriadeny:false})
  }

  private _nadriadeny():void{
    this.setState({tlacidloTankovanie:false})
    this.setState({tlacidloCest:false})
    this.setState({tlacidloUdrzba:false})
    this.setState({tlacidloReport:false})
    this.setState({tlacidloMOjeAuto:false})
    this.setState({tlacidloNadriadeny:true})
  }
}




