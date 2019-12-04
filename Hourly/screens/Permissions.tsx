import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Check from "../components/Check";

import { register } from "../functions";

const Permissions = () => {
    const [checked, setChecked] = useState(false);

    useEffect(function () {
        (async function () {
            const response = await fetch("http://192.168.1.3:3000/api/v1/test");
            const json = await response.json();

            console.log(json);

            if (checked) {
                try {
                    await register();
                } catch (ex) {
                    console.error(ex);
                }
            }
        })();
    }, [checked]);

    return (
        <Container>
            <Check label="Hello world" checked={checked} onChange={setChecked} />
        </Container>
    );
}

export default Permissions;