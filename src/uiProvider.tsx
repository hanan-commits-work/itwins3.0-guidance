import {
  AbstractWidgetProps,
  StagePanelLocation,
  StagePanelSection,
  UiItemsProvider,
} from '@itwin/appui-abstract';
import { ModelessDialogManager } from '@itwin/appui-react';
import { Dialog } from '@itwin/core-react';
import { Button, Select } from '@itwin/itwinui-react';

import React, { FunctionComponent, useEffect, useState } from "react";

import "./uiProvider.scss";

const Dlg:  FunctionComponent<{isNew: boolean}> = ({isNew}) => {
  const handleDialogClose = () => {
    ModelessDialogManager.closeDialog("issueDialog");
  }
  const [changeType, setChangeType] = useState<string>("Comment");
  const [changePriority, setChangePriority] = useState<string>("High");

  return (
    <Dialog
      opened={true}
      modal={false}
      onClose={handleDialogClose}
      onEscape={handleDialogClose}
      resizable={false}
      movable={true}
      width={350}
      title={'Dialog'}
    >
          <div id="_issueDlg"> 
          <span>Type: </span>
            <Select value={changeType}
            options={[
              {value: "Comment", label: "Comment"},
              {value: "Defect", label: "Defect"},
              {value: "Follow-up", label: "Follow-up"},
              {value: "Maintenance", label: "Maintenance"},
              {value: "Other", label: "Other"} ]}
               onChange={(option) => setChangeType(option)} 
               popoverProps={{ appendTo: document.body }}
             />  
           <span>Priority</span>  
           <Select value={changePriority}
            options={[
              {value: "High", label:"High"},
              {value: "Normal",label:"Normal"},
              {value: "Low", label: "Low"} ]}
               onChange={(option) => setChangePriority(option)} 
               popoverProps={{ appendTo: document.body }}

            />  
             </div>      
    </Dialog>
  );
}

export class MyFirstUiProvider implements UiItemsProvider {
  public readonly id = 'MyFirstProviderId';
  public static openDialog(isNew: boolean) {
    ModelessDialogManager.openDialog(this.issuesDialog(isNew), "issueDialog");
  }

  private static issuesDialog(isNew: boolean): React.ReactNode {
    return(
      <Dlg isNew={isNew} />
    )
  }
  public provideWidgets(
    stageId: string,
    stageUsage: string,
    location: StagePanelLocation,
    section?: StagePanelSection
  ): ReadonlyArray<AbstractWidgetProps> {
    const widgets: AbstractWidgetProps[] = [];
    
    if (
      location === StagePanelLocation.Right &&
      section === StagePanelSection.Start
    ) {

      const handleDialog = () => {
        ModelessDialogManager.openDialog(MyFirstUiProvider.issuesDialog(true), "issueDialog");
      }


      const dropdownbtn: AbstractWidgetProps = {
        id: 'DropDownbtn',
        label: 'Drop Down Button',
        getWidgetContent() {

          return (
            <Button 
              size='large'
              onClick={handleDialog}
              styleType = 'cta'
            >
              Press to Open Dialog
            </Button>
          );    
        }
      }
      widgets.push(dropdownbtn);

    }

    return widgets;
  }
}


