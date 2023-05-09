import {useContext} from 'react';

import {GetAConnectorButton} from '../../GetAConnectorButton';

import {ConnectWalletContext} from '~/providers/ConnectWalletProvider';

const GetAWalletScreen = () => {
  const {connectors} = useContext(ConnectWalletContext);

  return (
    <div className="sbc-flex sbc-flex-col sbc-justify-center sbc-p-popover sbc-pt-0">
      {connectors.map(({id}) => (
        <GetAConnectorButton connectorId={id} key={id} />
      ))}
    </div>
  );
};

export default GetAWalletScreen;
