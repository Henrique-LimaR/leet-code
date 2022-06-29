let a = "";	
let b = "";	
let c = "";	
let d = "";	
let e = "";	
let f = "";	
let g = "";	
let h = "";	
let i = "";	
let j = "";	
let k = "";	
let l = "";	
let m = "";	
let n = "";	
let o = "";	
let p = "";	
let q = "";	
let r = "";	
let s = "";	
let t = "";	
let u = "";	
let v = "";	
let w = "";	
let x = "";	
let y = "";	
let z = "";	

let minDeletions = function(S) {
    for(let letter = 0; letter < S.length; letter++){
        switch(S.charAt(letter)){
            case "a":
                a += "a";
            break;
            case "b":
                b += "b";
            break;
            case "c":
                c += "c";
            break;
            case "d":
                d += "d";
            break;
            case "e":
                e += "e";
            break;
            case "f":
                f += "f";
            break;
            case "g":
                g += "g";
            break;
            case "h":
                h += "h";
            break;
            case "i":
                i += "i";
            break;
            case "j":
                j += "j";
            break;
            case "k":
                k += "k";
            break;
            case "l":
                l += "l";
            break;
            case "m":
                m += "m";
            break;
            case "n":
                n += "n";
            break;
            case "o":
                o += "o";
            break;
            case "p":
                p += "p";
            break;
            case "q":
                q += "q";
            break;
            case "r":
                r += "r";
            break;
            case "s":
                s += "s";
            break;
            case "t":
                t += "t";
            break;
            case "u":
                u += "u";
            break;
            case "w":
                w += "w";
            break;
            case "x":
                x += "x";
            break;
            case "y":
                y += "y";
            break;
            case "z":
                z += "z";
            break;
        };
    };
    let arr = [
        a, b, c, d, e,
        f, g, h, i, j,
        k, l, m, n, o, 
        p, q, r, s, t, 
        u, v, w, x, y, z];

   let arr1 = arr.filter(l => l != '' && l.length != S.length);
   let arr2 = arr1.map(l => Math.max(l.length));

   //estudar essa parte!
   let arr3 = arr2.filter((item, pos, self) => {
    return self.indexOf(item) == pos;
   });

   return arr3;
};

console.log(minDeletions("bbebcca"));
//paramater @{string}
//return @{number}