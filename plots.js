function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    buildcharts(sampleNames[0])
})}

init();



function buildcharts(sample) {
  d3.json("samples.json").then((data) => {
    // filter data
    var metadatainfo = data.metadata.filter( x => x.id == sample);
    // console.log(metadatainfo[0]);
    // console.log(metadatainfo);
    var metadatasample = metadatainfo[0];
    // var washfreq = 

    var sampleinfo = data.samples.filter( x => x.id == sample);
    // console.log(samplesample[0]);
    
    var samplesample = sampleinfo[0];
    console.log(samplesample);
    var otuid = samplesample.otu_ids;
    var otulabel= samplesample.otu_labels;
    var samplevalue = samplesample.sample_values;

  });
};