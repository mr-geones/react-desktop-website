import React from 'react'

function Footer() {
  return (
    <footer>
      <div class="bg__dark">
        <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
        <form>
          <label for="subscribe">Your Email</label>
          <input type="text" id="subscribe" placeholder="&nbsp; &nbsp; &nbsp; Your Email" /><input type="submit" value="Subscribe" class="subscribe-button" />
        </form>
      </div>
      <p>&copy; 2024 Silicon. All rights reserved. Credit MadrasThemes</p>
    </footer>
  )
}

export default Footer