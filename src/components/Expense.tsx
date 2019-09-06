import * as React from 'react';
import { Component } from 'react';
import Chart from './common/Chart';

export interface Props {
 project: string; 
}
 
export interface State {
  project: string;
}
 
class Expense extends React.Component<Props, State> {
  state: State = { project: "PCI-E1" }
  render() { 
    return (  );
  }
}
 
export default Expense;