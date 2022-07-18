let addTwoNumbes = function(l1, l2){
      let n1 = l1.reverse(), n2 = l2.reverse();
      let str1 = n1.join(''), str2 = n2.join('');
      let nt1 = Number(str1), nt2 = Number(str2);
      let sum = nt1 + nt2; 
      
      let vst = String(sum).split('');
      let rvst = vst.reverse(); //rvst = reverse value string
    
      let nString = rvst.join('');
      let arrS = nString.split('');
    
      let arr = arrS.map(value => {
        return Number(value);
      });

      return arr; 
    }; 

console.log(addTwoNumbes([2,4,3], [5,6,4]))
