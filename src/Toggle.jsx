import React from 'react'

function Toggle() {
  return (
    <div class="wrapper__toggle_signin">
      <span id="toggle">
        <span class="wrapper__darkmode">Dark Mode</span>
        <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
      </span>
      <a href="" class="button button__signin"><span>Sign in / up</span></a>
    </div>
  )
}

export default Toggle