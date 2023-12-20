import { createActor, createMachine } from "xstate";

const mySuperMachine = createMachine({
    id: 'toggle',
    initial: 'inactive',
    states: {
        inactive: {
            on: { toggle: 'active' }
        },
        active: {
            on: { toggle: 'inactive' },
            after: { 2000: 'inactive' }
        }
    }
});

const actor = createActor(mySuperMachine);

actor.subscribe((snapshot) => {
    console.log('Value:', snapshot.value);
});

actor.start();
actor.send({ type: 'toggle' });

await new Promise((resolve) => {
    setTimeout(resolve, 3000);
})

// actor.send({ type: 'toggle' });
// actor.send({ type: 'toggle' });