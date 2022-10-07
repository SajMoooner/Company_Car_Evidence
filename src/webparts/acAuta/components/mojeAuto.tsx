import * as React from "react";
import styles from "./AcAuta.module.scss";
import { IAcAutaProps, IAcAutaState } from "./IAcAutaProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { CompoundButton } from "office-ui-fabric-react/lib/components/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { DayOfWeek } from "office-ui-fabric-react/lib/DatePicker";
import { DatePicker } from "@fluentui/react/lib/DatePicker";
import { DefaultPalette } from "office-ui-fabric-react/lib/Styling";
import {
  ActionButton,
  Dropdown,
  DropdownMenuItemType,
  IColumn,
  IDropdownOption,
  IIconProps,
  IStackStyles,
  IStackTokens,
  mergeStyles,
  Stack,
} from "@fluentui/react";
import MojKomponent from "./mojKomponent";

const stackItemStyles = mergeStyles({
  alignItems: "center",
  color: DefaultPalette.white,
  display: "flex",
  height: 50,
  justifyContent: "center",
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

const iconProps = { iconName: "ReminderPerson" };
export default class MojeAuto extends React.Component<IAcAutaProps> {
  constructor(props: IAcAutaProps) {
    super(props);
  }

  public render(): React.ReactElement<IAcAutaProps> {
    const { description } = this.props;

    return (
      <div>
        <Stack tokens={numericalSpacingStackTokens}>
          <TextField
            label="Vlastník"
            disabled
            defaultValue="Šimon Ochotnický"
            iconProps={iconProps}
          />
          <TextField label="Typ auta" disabled defaultValue="Audi A8" />
          <TextField label="Značka" disabled defaultValue="ZA 231 EY" />
          <TextField
            label="Číslo vodičského preukazu"
            disabled
            defaultValue="KL875LKJH"
          />
          <TextField
            label="VIN číslo"
            disabled
            defaultValue="WBSWD983212PY3903"
          />
          <TextField
            label="Dátum pridelenia"
            disabled
            defaultValue="1.9.2022"
          />

          <MojKomponent description="s"></MojKomponent>
        </Stack>

      </div>
    );
  }
}
