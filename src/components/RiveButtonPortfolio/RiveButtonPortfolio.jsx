{/*import React from 'react';
import {  useStateMachineInput } from '@rive-app/react-canvas';
import s from './style.module.scss';

const riveButton = () => {
    const STATE_MACHINE_NAME = "HoverStateMachine";
    const INPUT_NAME = "Hover";

    const { rive, RiveComponent } = useRive({
        src: './buttonportfolio.riv',
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
    });

    const onMouseEnter = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        INPUT_NAME,
    );

    return (
        <div className={s.containerButton}>
            <RiveComponent
                onMouseEnter={() => onMouseEnter.fire()}
            />
    </div>
);
};

export default riveButton;*/}