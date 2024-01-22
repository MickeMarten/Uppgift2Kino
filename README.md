<img src="assets\bihjografenlogo.png" alt="BiHjoGrafen" height="200px">
<hr>
<h2>Practices</h2>

<ul>
  <li>We use SCSS for styling.</li>
  <li>All .scss files are to be imported into main.scss and then compiled from there into main.css.<br> No one should write directly in main.scss or main.css.</li>
  <li>All classnames in html should be written with BEM-method if they are to be styled.</li>
  <li>We use fontstyle roboto on all pages</li>
  <li>We use the extension Prettier for formatting scss and JS.</li>
  <li>In HTML we format with HTML language feature.</li>
  <li>We do visual testing on all features added as they are mostly static with minimal JS.</li>
  <li>Preliminary we have dailyscrum at 9.30 everyday of the sprint.</li>
  </ul>
<hr>

  <h2>Gitflow before push to remote repo</h2>

  <ol>
    <li>git checkout main > Start with standing in main branch. </li>
    <li>git status > Check if main is up to date.</li>
    <li>git pull origin main > Get the latest changes from the remote repo. </li>
    <li>git checkout branchNamn > Go to your own branch</li>
    <li>git merge main > Merge your branch with main to see if there are any conflicts. If so you solve them locally.</li>
    <li>git push origin branchNamn > Push your branch to Github. Create a pullrequest and wait for reviews before mergeing with main</li>
    <li>The writer merges his or hers own pullrequest when enough input from reviews have been made and all looks good</li>
  </ul>

<h3>More info about the gitflow we use and why</h3>

<p>To re-synchronise a branch with updates that have been made to the main branch on the repository, first ensure the local main branch has been updated using a checkout and pull for the main branch. Then checkout the branch of interest and merge from the updated local main. We can then push the merges back to the remote repository's version of the branch. The commits are those that were committed by others to the remote repository's main branch.</p>
<hr>
<h2>Documentation from meetings can be found <a href="https://onedrive.live.com/edit?id=459FEE9ED7B23459!19112&resid=459FEE9ED7B23459!19112&ithint=file%2cdocx&authkey=!AGNPgK8k2BDtk-w&wdo=2&cid=459fee9ed7b23459">here</a></h2>
<hr>
<h2>Planning before sprintplanning can be found <a href="https://www.figma.com/file/evtqmgEC2pUSZQXHwAIMII/biografsajt?type=whiteboard&node-id=99-9978&t=IsHGt8ssRdGGAksx-0">here</a></h2>
