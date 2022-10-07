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
import { Label } from "office-ui-fabric-react";

const stackStyles1: IStackStyles = {
  root: {
    width: 400,
  },
};

const itemStyles: React.CSSProperties = {
  alignItems: "center",

  display: "flex",
  height: 50,
  justifyContent: "center",
  width: 150,
};

const numericalSpacingStackTokens1: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

const stackItemStyles = mergeStyles({
  alignItems: "center",
  color: DefaultPalette.white,
  display: "flex",
  height: 70,
  justifyContent: "center",
  width: 100,
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

const days: IDropdownOption[] = [
  { text: "Január", key: DayOfWeek.Sunday },
  { text: "Február", key: DayOfWeek.Monday },
  { text: "Marec", key: DayOfWeek.Tuesday },
  { text: "Apríl", key: DayOfWeek.Wednesday },
  { text: "Máj", key: DayOfWeek.Thursday },
  { text: "Jún", key: DayOfWeek.Friday },
  { text: "Júl", key: DayOfWeek.Saturday },
];

export default class Report extends React.Component<IAcAutaProps, {}> {
  constructor(props: IAcAutaProps) {
    super(props);
  }

  public render(): React.ReactElement<IAcAutaProps> {
    const { description } = this.props;

    return (
      <div>
        <Stack tokens={numericalSpacingStackTokens}>
          <Dropdown label="Vyber mesiac" options={days} defaultSelectedKey={"September"} placeholder={"Vyber mesiac reportu"}/>
          <TextField
            label="Nádrž na začiatku mesiaca"
            disabled
            defaultValue="50"
          />
          <TextField
            label="Natankované tento mesiac v litroch"
            disabled
            defaultValue="109"
          />

          <TextField
            label="Natankované tento mesiac v eurách"
            disabled
            defaultValue="201,98 "
          />

          <TextField label="Prejdené km" disabled defaultValue="1029" />

          <Stack
            horizontal
            styles={stackStyles1}
            tokens={numericalSpacingStackTokens1}
          >
            <PrimaryButton
              ariaDescription="Detailed description used for screen reader."
              disabled={false}
              checked={true}
            >
              Vytvoriť PDF report
            </PrimaryButton>
            <PrimaryButton
              ariaDescription="Detailed description used for screen reader."
              disabled={false}
              checked={true}
            >
              Poslať nadriadenému
            </PrimaryButton>
          </Stack>
        </Stack>
      </div>
    );
  }
}
