{
  function hasSusha() {

    if (window?.__Susha__) {
      return true;
    }

    else return false;
  }
}

// ---

(async () => {

  if (!hasSusha()) return;

  // ---

  await import('./meta.js')
  
  const radMeta = new Radix_META();

  // ---

  async function getIcon(name = '', dir = '') {
    if (!hasSusha()) return;

    let folder = `./susha-radix/radix-icons/${name}`;

    let dirUrl = new URL(dir, window.location.href);
    let parsedUrl = new URL(folder, dirUrl);

    let icon = await fetch(parsedUrl.href);
    
    if (icon.status === 200) {
      console.log(icon.blob())
      return await createIcon(
        await icon.blob()
      )
    } else {
      console.log(icon.status)
      return false;
    }
  }

  async function createIcon(blob) {
    if (!hasSusha()) return;

    if (blob) {
      let iconUrl = URL.createObjectURL(blob);
      let icon = i()
        .class$('radix-icon')
        .attr('src', iconUrl)
        .attr('role', 'img')
        .attr('aria-label', 'icon')
        .attr('tabindex', '-1')
        .attr('title', 'icon')
        .attr('alt', 'icon')

      return icon;
    }
  }
  
  document.body.appendChild(getIcon('activity-log.svg', './mod/').get$())

})();
