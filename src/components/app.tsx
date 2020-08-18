import React from 'react';
import { VertexViewer } from '@vertexvis/viewer-react';

type Env = 'platdev' | 'platprod';

interface Props {
  streamKey: string;
  env?: Env;
}

export function App({ streamKey, env }: Props): JSX.Element {
  return (
    <div>
      <h1>React Viewer Demo</h1>
      <div>
        <VertexViewer
          src={`urn:vertexvis:stream-key:${streamKey}`}
          configEnv={env}
        />
      </div>
    </div>
  );
}
