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
  mergeStyles,
  PrimaryButton,
  Stack,
} from "@fluentui/react";
import { DetailsListBasicPracovnaCesta } from "./detailListPracovnaCesta";
import { PotvrdCestu } from "./potrdCestu";

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

const iconProps = { iconName: "Car" };
const iconProps1 = { iconName: "CalendarMirrored" };
const iconProps2 = { iconName: "CalendarReply" };
const iconProps3 = { iconName: "Fingerprint" };

export default class PracovnaCesta extends React.Component<IAcAutaProps, {}> {
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
            placeholder="Zvoľ dátum cesty"
            label="Dátum pracovnej cesty"
          />
          <TextField
            label="Prejdené km"
            placeholder="Zadaj počet prejdených km"
            iconProps={iconProps}
          />
          <TextField
            label="Začiatok pracovnej cesty"
            placeholder="Zadaj mesto z ktorého sa vyrážalo"
            iconProps={iconProps1}
          />
          <TextField
            label="Koniec pracovnej cesty"
            placeholder="Zadaj mesto v ktorom sa pracovná cesta končila"
            iconProps={iconProps2}
          />

          <TextField
            label="Súkromné km"
            placeholder="Zadaj počet km prejdných mimo pracovnej cesty"
            iconProps={iconProps3}
          />
          <PotvrdCestu></PotvrdCestu>
          <DetailsListBasicPracovnaCesta></DetailsListBasicPracovnaCesta>
        </Stack>
      </div>
    );
  }
}
