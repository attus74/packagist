/**
 * Packages
 */

Drupal.behaviors.packagistPackages = {
  attach: function (context, settings) {
    jQuery('.field--name-project-packages').not('.initialized').each(function() {
      jQuery(this).addClass('initialized');
      var $versionList = jQuery('<ul />').addClass('packages-version-list');
      $versionList.appendTo(jQuery(this));
      var $packages = jQuery(this).find('.field__item');
      var versions = [];
      $packages.each(function() {
        
      });
      var $packageLast = jQuery(this).find('.field__item:last');
    });
  }
};