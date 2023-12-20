import { mySuperMachine } from "./supermachine";
import { createActor } from "xstate";

describe('My super machine', () => {
    it('should toggle', () => {
        let service = createActor(mySuperMachine);
        service.start();

        service.send({ type: 'toggle' });

        expect(service.getSnapshot().matches('active')).toBe(true);
    });
});
