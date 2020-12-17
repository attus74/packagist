/**
 * Packages
 */

Drupal.behaviors.packagistPackages = {
  attach: function (context, settings) {
    jQuery('.field--name-project-packages').not('.initialized').each(function() {
      jQuery(this).addClass('initialized');
      var $versionList = jQuery('<ul />').addClass('packages-version-list');
      $versionList.appendTo(jQuery(this));
      var $packages = jQuery(this).find('> .field__items > .field__item');
      var $packageLast = jQuery(this).find('.field__item:last-child');
      $packageLast.addClass('packagist-package-last');
      var versions = [];
      $packages.each(function() {
        var $version = jQuery(this).find('.field--name-version .field__item');
        var v = $version.html();
        if (v !== undefined) {
          versions.push(v);
        }
        if (!jQuery(this).hasClass('packagist-package-last')) {
          jQuery(this).hide();
        }
      });
      for (i in versions) {
        var $li = jQuery('<li >').addClass('packagist-version').html(versions[i]);
        $li.click(function() {
          jQuery(this).siblings('li').removeClass('active');
          jQuery(this).addClass('active');
          var activeVersion = jQuery(this).html();
          $packages.hide(200);
          $packages.each(function() {
            var $package = jQuery(this);
            var $version = jQuery(this).find('.field--name-version .field__item');
            var v = $version.html();
            if (activeVersion === v) {
              console.debug($package);
              jQuery(this).show(250);
            }
          });
        });
        $li.prependTo($versionList);
      }
      $versionList.find('li:first-child').addClass('active');
    });
  }
};