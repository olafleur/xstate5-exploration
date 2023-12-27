import { createMachine } from "xstate";

const mySuperMachine = createMachine({
    id: 'toggle',
    initial: 'inactive',
    states: {
        inactive: {
            on: { toggle: 'active' }
        },
        active: {
            on: { toggle: 'inactive' },
        }
    }
});

export { mySuperMachine };
// yo
