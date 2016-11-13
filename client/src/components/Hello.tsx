import * as React from 'react';

import { helloStyles } from './Hello-styles';

export interface HelloProps { compiler: string; framework: string; };

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div className={helloStyles.bg}>
                <h1 className={helloStyles.heading}>
                    Hello from {this.props.compiler} and {this.props.framework} (and HMR too :3)!
                </h1>
            </div>
        );
    }
}
