export default function uuid() {

    var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var rs = "";

    while ( rs.length < 20 ) {

        rs += abc[ Math.floor( Math.random() * abc.length ) ];

    }

    return rs;

}