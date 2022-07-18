public int romanToInt(String s) {
	// v will be used for switch case
    int v = 0;
    int res = 0;
    int prev = 0;
	// iterating backwards since we read roman numbers from right to left.
    for(int i=s.length()-1; i>=0; i--){
     switch (s.charAt(i)) {
            case 'I': v = 1; break;
            case 'V': v = 5; break;
            case 'X': v = 10; break;
            case 'L': v = 50; break;
            case 'C': v = 100; break;
            case 'D': v = 500; break;
            case 'M': v = 1000; break;
        }
	   if(prev == 0){
            res += v;
            prev = v;
	   } else if(prev > v){
            res -= v;
            prev = v;
     } else {
            res += v;
            prev = v;
     }
  }
  return res;
}
