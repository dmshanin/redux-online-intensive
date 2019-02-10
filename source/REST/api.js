// Instruments
import { MAIN_URL, groupId } from "./config";

export const api = {
    posts: {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'GET',
                headers: {
                    'x-no-auth': groupId,
                },
            });
        },

        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-no-auth':    groupId,
                },
                body: JSON.stringify({ comment }),
            });
        },
    },
};
