class Computer {
  constructor(processor, RAM, OS, SSD, HDMI) {
    this.processor = processor;
    this.RAM = RAM;
    this.OS = OS;
    this.SSD = SSD;
    this.HDMI = HDMI;
  }
  HDMI() {
    return (this.HDMI = true);
  }

  calcRAM() {
    return 15 - this.RAM;
  }

  description() {
    console.log(`This computer have ${this.processor} processor`);
  }
}

module.exports = Computer;

new Computer("Intel", 15, "Windows", 225, true).description();
