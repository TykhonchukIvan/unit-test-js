import Enzyme from 'enzyme';

const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');


Enzyme.configure({adapter: new Adapter()});

console.error = (message) => {
  throw new Error(message);
};