import React from 'react';

interface sunProps {
  size?: number;
}

class Sun extends React.Component<sunProps> {

  protected size: number;

  constructor(props: any) {
    super(props)
    this.size = this.props.size? this.props.size : 25; 
  }

  render() {
    return(
      <svg id="Capa_1" enableBackground="new 0 0 512 512" height={this.size} viewBox="0 0 512 512" width={this.size} xmlns="http://www.w3.org/2000/svg" fill="white" ><g><path d="m121 256c0 74.439 60.561 135 135 135s135-60.561 135-135-60.561-135-135-135-135 60.561-135 135zm135-105c57.897 0 105 47.103 105 105s-47.103 105-105 105-105-47.103-105-105 47.103-105 105-105z"/><path d="m372.673 372.673c-5.858 5.858-5.858 15.355 0 21.213l72.426 72.426c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213l-72.426-72.426c-5.858-5.859-15.356-5.859-21.213 0z"/><path d="m66.901 45.688c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l72.426 72.426c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213z"/><path d="m45.688 466.312c5.857 5.858 15.355 5.859 21.213 0l72.426-72.426c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-72.426 72.426c-5.858 5.858-5.858 15.355 0 21.213z"/><path d="m466.312 45.688c-5.857-5.858-15.355-5.858-21.213 0l-72.426 72.426c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0l72.426-72.426c5.858-5.858 5.858-15.355 0-21.213z"/><path d="m319.143 408.44c-7.654 3.17-11.288 11.945-8.118 19.599l11.48 27.716c3.166 7.642 11.934 11.293 19.599 8.118 7.654-3.17 11.288-11.945 8.118-19.599l-11.48-27.716c-3.171-7.654-11.945-11.287-19.599-8.118z"/><path d="m192.857 103.56c7.654-3.17 11.288-11.945 8.118-19.599l-11.48-27.716c-3.171-7.654-11.945-11.287-19.599-8.118-7.654 3.17-11.288 11.945-8.118 19.599l11.48 27.716c3.167 7.642 11.934 11.293 19.599 8.118z"/><path d="m83.961 311.024-27.716 11.48c-7.654 3.17-11.288 11.945-8.118 19.599 3.166 7.642 11.934 11.293 19.599 8.118l27.716-11.48c7.654-3.17 11.288-11.945 8.118-19.599-3.17-7.653-11.944-11.286-19.599-8.118z"/><path d="m428.039 200.976 27.716-11.48c7.654-3.17 11.288-11.945 8.118-19.599s-11.944-11.287-19.599-8.118l-27.716 11.48c-7.654 3.17-11.288 11.945-8.118 19.599 3.166 7.642 11.934 11.292 19.599 8.118z"/><path d="m173.259 416.558-11.48 27.716c-3.17 7.654.464 16.428 8.118 19.599 7.685 3.182 16.441-.495 19.599-8.118l11.48-27.716c3.17-7.654-.464-16.428-8.118-19.599-7.655-3.169-16.429.464-19.599 8.118z"/><path d="m338.741 95.442 11.48-27.716c3.17-7.654-.464-16.428-8.118-19.599-7.654-3.169-16.428.464-19.599 8.118l-11.48 27.716c-3.17 7.654.464 16.428 8.118 19.599 7.685 3.182 16.442-.495 19.599-8.118z"/><path d="m95.442 173.259-27.716-11.48c-7.654-3.17-16.428.464-19.599 8.118-3.17 7.654.464 16.428 8.118 19.599l27.716 11.48c7.685 3.182 16.441-.495 19.599-8.118 3.17-7.654-.464-16.429-8.118-19.599z"/><path d="m455.755 322.505-27.716-11.48c-7.654-3.169-16.428.464-19.599 8.118-3.17 7.654.464 16.428 8.118 19.599l27.716 11.48c7.685 3.182 16.441-.495 19.599-8.118 3.17-7.654-.464-16.429-8.118-19.599z"/><path d="m241 436v61c0 8.284 6.716 15 15 15s15-6.716 15-15v-61c0-8.284-6.716-15-15-15s-15 6.716-15 15z"/><path d="m271 76v-61c0-8.284-6.716-15-15-15s-15 6.716-15 15v61c0 8.284 6.716 15 15 15s15-6.716 15-15z"/><path d="m0 256c0 8.284 6.716 15 15 15h61c8.284 0 15-6.716 15-15s-6.716-15-15-15h-61c-8.284 0-15 6.716-15 15z"/><path d="m497 241h-61c-8.284 0-15 6.716-15 15s6.716 15 15 15h61c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/></g></svg>
    );
  }
}

export default Sun;