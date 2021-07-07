'use strict';

const { Device } = require('homey');

class MyDevice extends Device {

  /**
   * onInit is called when the device is initialized.
   */
  async onInit() {
    this.log('MyDevice has been initialized');

    // Send state change from Homey to device
    this.registerCapabilityListener('onoff', async (value) => {
      this.log('Turned On/Off by Homey:', value);
    })

    

    // Set state (e.g. on receipt of webhook)
    // this.setCapabilityValue('onoff', true).catch(this.error)
    // this.setCapabilityValue('onoff', false).catch(this.error)

    // Advise that device is not reachable
    // this.setUnavailable();


  }

  // this method is called when the Device has requested a state change (turned on or off)
    async onCapabilityOnoff(value, opts) {
      this.log('Devices has requested a state change');

    // ... set value to real device, e.g.
    // await setMyDeviceState({ on: value });
    // or, throw an error
    // throw new Error('Switching the device failed!');
  }
  
  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('MyDevice has been added');
  }

  /**
   * onSettings is called when the user updates the device's settings.
   * @param {object} event the onSettings event data
   * @param {object} event.oldSettings The old settings object
   * @param {object} event.newSettings The new settings object
   * @param {string[]} event.changedKeys An array of keys changed since the previous version
   * @returns {Promise<string|void>} return a custom message that will be displayed
   */
  async onSettings({ oldSettings, newSettings, changedKeys }) {
    this.log('MyDevice settings where changed');
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   */
  async onRenamed(name) {
    this.log('MyDevice was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('MyDevice has been deleted');
  }

}

module.exports = MyDevice;