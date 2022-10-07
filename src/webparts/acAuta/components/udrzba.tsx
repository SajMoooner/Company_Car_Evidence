import * as React from "react";
import styles from "./AcAuta.module.scss";
import { IAcAutaProps } from "./IAcAutaProps";
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
  Label,
  mergeStyles,
  PrimaryButton,
  Stack,
} from "@fluentui/react";
import { DropzoneArea } from "material-ui-dropzone";
import { DetailsListBasicUdrzba } from "./detailListUdrzba";
import { PotvrdUdrzbu } from "./potvrdUdrzbu";

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

const options: IDropdownOption[] = [
  { key: "typ", text: "Typ údržby", itemType: DropdownMenuItemType.Header },
  { key: "odstr", text: "Doplnenie vody do odstrekovača" },
  { key: "umyvanie", text: "Umývanie auta" },
  { key: "olej", text: "Výmena oleja" },
  { key: "havaria", text: "Autonehoda" },
];

const options1: IDropdownOption[] = [
  {
    key: "miesto",
    text: "Miesto údržby",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "cerpacka", text: "Čerpacia stanica" },
  { key: "servis", text: "Autoservis" },
  { key: "umyvacka", text: "Auto umývareň" },
];

const iconProps = { iconName: "Money" };

export default class Udrzba extends React.Component<IAcAutaProps, {}> {
  constructor(props: IAcAutaProps) {
    super(props);
  }

  public render(): React.ReactElement<IAcAutaProps> {
    const { description } = this.props;

    return (
      <div>
        <Stack tokens={numericalSpacingStackTokens}>
          <DatePicker
            firstDayOfWeek={DayOfWeek.Monday}
            placeholder="Zvoľ dátum"
            label="Dátum udržby"
          />

          <Dropdown
            placeholder="Vyber typ údržby"
            label="Typ údržby"
            options={options}
          />

          <Dropdown
            placeholder="Vyber miesto údržby"
            label="Miesto údržby"
            options={options1}
          />

          <TextField
            label="Cena"
            placeholder="Zadaj celkovú sumu"
            iconProps={iconProps}
          />
          <Label>Vlož sken bločku </Label>
          <DropzoneArea></DropzoneArea>

          <PotvrdUdrzbu></PotvrdUdrzbu>
          <DetailsListBasicUdrzba></DetailsListBasicUdrzba>
        </Stack>
      </div>
    );
  }
}
