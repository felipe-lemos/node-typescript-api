import * as path from 'path';
import moduleAlias from 'module-alias';

//Pegando diretório do node, a pasta onde estamos e adicionado os arquivos.
const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test')
});
