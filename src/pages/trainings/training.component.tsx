import React, { PureComponent } from 'react';

export class TrainingComponent extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render(): React.ReactNode {
    return <div>
      Training component
    </div>
  }
}
