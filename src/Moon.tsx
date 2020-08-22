import React from 'react';

interface MoonProps {
  size?: number;
}

class Moon extends React.Component<MoonProps> {

  protected size: number

  constructor(props: any) {
    super(props);
    this.size = this.props.size? this.props.size : 25;
  }

  render() {
    return(
      <svg height={this.size} viewBox="-44 -33 1065 1065.0001" width={this.size} xmlns="http://www.w3.org/2000/svg" fill="white" ><path d="m973.386719 554.421875s-267.675781 264.9375-518.992188 87.199219c-354.453125-250.671875-10.328125-643.640625-10.328125-643.640625s-177.933594 11.847656-324.097656 168.292969c-81.546875 87.285156-122.730469 210.277343-122.730469 329.890624 0 133.617188 52.03125 259.242188 146.515625 353.734376 94.492188 94.484374 220.117188 146.519531 353.742188 146.519531 119.632812 0 236.914062-41.1875 326-120.8125 173.527344-155.109375 149.890625-321.183594 149.890625-321.183594zm0 0"/></svg>
    );
  }
}


export default Moon;