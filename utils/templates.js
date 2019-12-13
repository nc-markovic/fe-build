const { projectKey } = require('../config/general.config');

const clientlibTemplate = (category, prefix=projectKey) => `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:cq="http://www.day.com/jcr/cq/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="cq:ClientLibraryFolder"
    allowProxy="{Boolean}true"
    categories="[${prefix}.${category}]"/>
`;
module.exports = { 
  clientlibTemplate
};