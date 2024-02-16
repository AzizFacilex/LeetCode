function numberOfMatches(n: number): number {
    let totalMatches = 0;
  
    const calculateMatches = (teams: number) => {
      if (teams <= 1) return;
      
      totalMatches += Math.floor(teams / 2);
      calculateMatches(Math.ceil(teams / 2));
    };
  
    calculateMatches(n);
    
    return totalMatches;
  }
  