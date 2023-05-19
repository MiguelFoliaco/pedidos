import { www } from "./www/www";

const main = async () => {
    www.listen(process.env.PORT || 3000, () => {
        console.log(`Server in port ${process.env.PORT || 3000}`);
    });
}

main();