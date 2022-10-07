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
import { DropzoneArea, DropzoneDialog } from "material-ui-dropzone";
import { DetailsListBasicTankovanie } from "./detailListTankovanie";
import { PotrdTankovanie } from "./potvrdTankovanie";
import { DetailsListBasicNadraideny } from "./detailListNadriadeny";

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

const days: IDropdownOption[] = [
  { text: "Január", key: DayOfWeek.Sunday },
  { text: "Február", key: DayOfWeek.Monday },
  { text: "Marec", key: DayOfWeek.Tuesday },
  { text: "Apríl", key: DayOfWeek.Wednesday },
  { text: "Máj", key: DayOfWeek.Thursday },
  { text: "Jún", key: DayOfWeek.Friday },
  { text: "Júl", key: DayOfWeek.Saturday },
];

export default class Nadriadeny extends React.Component<IAcAutaProps, {}> {
  constructor(props: IAcAutaProps) {
    super(props);
  }

  public render(): React.ReactElement<IAcAutaProps> {
    const { description } = this.props;

    return (
      <div>
        <Stack tokens={numericalSpacingStackTokens}>
          <Dropdown label="Vyber mesiac" options={days} />
          <DetailsListBasicNadraideny></DetailsListBasicNadraideny>
          <PrimaryButton text="Potrvrdiť vybraným"  allowDisabledFocus disabled={false} checked={true} />
        </Stack>
      </div>
    );
  }
}
