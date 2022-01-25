import {
  AbstractWidgetProps,
  StagePanelLocation,
  StagePanelSection,
  UiItemsProvider,
} from '@itwin/appui-abstract';
import { Select } from '@itwin/itwinui-react';

import React, { FunctionComponent, useEffect, useState } from "react";



export class MyFirstUiProvider implements UiItemsProvider {
  public readonly id = 'MyFirstProviderId';

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
      const dropdown: AbstractWidgetProps = {
        id: 'DropDown',
        label: 'dropDown',
        getWidgetContent() {
          const option = "Comment"
          const setChangeValue = (option: string) => {
            return option;
          }
          return (
            <Select value={option}
            options={[
              {value: "Comment", label: "Comment"},
              {value: "Defect", label: "Defect"},
              {value: "Follow-up", label: "Follow-up"},
              {value: "Maintenance", label: "Maintenance"},
              {value: "Other", label: "Other"} ]}
               onChange={(option) => setChangeValue(option)} 
             />  
          );    
        }
      }
      widgets.push(dropdown);

    }

    return widgets;
  }
}