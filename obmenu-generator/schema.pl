#!/usr/bin/perl

# obmenu-generator - schema file

=for comment

    item:      add an item inside the menu               {item => ["command", "label", "icon"]},
    cat:       add a category inside the menu             {cat => ["name", "label", "icon"]},
    sep:       horizontal line separator                  {sep => undef}, {sep => "label"},
    pipe:      a pipe menu entry                         {pipe => ["command", "label", "icon"]},
    file:      include the content of an XML file        {file => "/path/to/file.xml"},
    raw:       any XML data supported by Openbox          {raw => q(...)},
    beg:       begin of a category                        {beg => ["name", "icon"]},
    end:       end of a category                          {end => undef},
    obgenmenu: generic menu settings                {obgenmenu => ["label", "icon"]},
    exit:      default "Exit" action                     {exit => ["label", "icon"]},

=cut

# NOTE:
#    * Keys and values are case sensitive. Keep all keys lowercase.
#    * ICON can be a either a direct path to an icon or a valid icon name
#    * Category names are case insensitive. (X-XFCE and x_xfce are equivalent)

require "$ENV{HOME}/.config/obmenu-generator/config.pl";

## Text editor
my $editor = $CONFIG->{editor};

our $SCHEMA = [



    #          COMMAND                 LABEL              ICON
    
    {item => ['xdg-open http://', 'Browser',  '/home/xsisec/.config/obmenu-generator/icons/4b333b9f8bfe0d0b92c13c5447ee8d27.png']},
    {item => ['kdocker',       '[Dock]', '/home/xsisec/.config/obmenu-generator/icons/fe47f37ed38f7240adeb5485c395c721.png']},
    {item => ['pcmanfm',       'Files', '/home/xsisec/.config/obmenu-generator/icons/7c07be28362b1cfda41fdf27c7df91fa.png']},
    {item => ['xfce4-terminal',            'Terminal',     '/home/xsisec/.config/obmenu-generator/icons/2dca12fe7eae45a289c0d23dcb1d8544.png']},
    {item => ['leafpad',            'LeafPad',     '/home/xsisec/.config/obmenu-generator/icons/d7f167483027d1e8e20016c30859bb9a.png']},
    {item => ['virtualbox',            'VirtualBox',     '/home/xsisec/.config/obmenu-generator/icons/60cd4d55308f482b7f3993967420046f.png']},
    {item => ['vmware',            'Vmware',     '/home/xsisec/.config/obmenu-generator/icons/6a8eefb88287d46d5c0a471a36dd249d.png']},
    {item => ['/opt/airdcpp-webclient/airdcppd',       'AirDC', '/opt/airdcpp-webclient/web-resources/images/AirDCPlusPlus.d2a0895612b6cf69ccdac84947d293e2.png']},
    {item => ['pcmanfm /home/xsisec/.config/',       '[Config]', '/home/xsisec/.config/obmenu-generator/icons/start-hereB.png']},
    {item => ['pcmanfm /home/xsisec/Downloads/',       '[Downloads]', '/home/xsisec/.config/obmenu-generator/icons/network-local.png']},
    {item => ['pcmanfm /media/veracrypt1/Done/',       '[Done]', '/home/xsisec/.config/obmenu-generator/icons/network-local.png']},
    
    

    {sep => 'Categories'},

    #          NAME            LABEL                ICON
    {cat => ['utility',     'Accessories', 'applications-utilities']},
    {cat => ['development', 'Development', 'applications-development']},
    {cat => ['education',   'Education',   'applications-science']},
    {cat => ['Platform',        'Games',       'applications-games']},
    {cat => ['graphics',    'Graphics',    'applications-graphics']},
    {cat => ['audiovideo',  'Multimedia',  'applications-multimedia']},
    {cat => ['network',     'Network',     '/home/xsisec/.config/obmenu-generator/icons/1c3e21a7650ad8f41e7ceb8267bed4ea.png']},
    {cat => ['office',      'Office',      '/home/xsisec/.config/obmenu-generator/icons/ooo-gulls.png']},
    {cat => ['other',       'Diverse',       'applications-other']},
    {cat => ['settings',    'Settings',    'applications-accessories']},
    {cat => ['system',      'System',      'applications-system']},

    #             LABEL          ICON
    #{beg => ['My category',  'cat-icon']},
    #          ... some items ...
    #{end => undef},

    #            COMMAND     LABEL        ICON
    #{pipe => ['obbrowser', 'Disk', 'drive-harddisk']},

    ## Generic advanced settingsn
    #{sep       => undef},
    #{obgenmenu => ['Openbox Settings', 'applications-engineering']},
    #{sep       => undef},

    ## Custom advanced settings
    {beg => ['Advanced Settings', 'applications-engineering']},
    


    

      # Configuration files
      {item => ['/home/xsisec/.config/cleanssh.sh', 'CleanSSH', '/home/xsisec/.config/obmenu-generator/icons/63af62d6fc07c9f972fc1dd332484a40.png']},
      {item => ['/home/xsisec/.config/JDiskReport.sh', 'JDiskReport', '/home/xsisec/.config/obmenu-generator/icons/gparted.png']},
      {item => ["$editor ~/.conkyrc",              'Conky RC',    'text-x-generic']},
      {item => ["$editor ~/.config/tint2/tint2rc", 'Tint2 Panel', 'text-x-generic']},
      

      # obmenu-generator category
      {beg => ['Obmenu-Generator', 'accessories-text-editor']},
        {item => ["$editor ~/.config/obmenu-generator/schema.pl", 'Menu Schema', 'text-x-generic']},
        {item => ["$editor ~/.config/obmenu-generator/config.pl", 'Menu Config', 'text-x-generic']},
        {sep  => undef},
        {item => ['obmenu-generator -s -c',    'Generate a static menu',             'accessories-text-editor']},
        {item => ['obmenu-generator -s -i -c', 'Generate a static menu with icons',  'accessories-text-editor']},
        {sep  => undef},
        {item => ['obmenu-generator -p',       'Generate a dynamic menu',            'accessories-text-editor']},
        {item => ['obmenu-generator -p -i',    'Generate a dynamic menu with icons', 'accessories-text-editor']},
        {sep  => undef},

        {item => ['obmenu-generator -d', 'Refresh cache', 'view-refresh']},
      {end => undef},

      # Openbox category
      {beg => ['Openbox', 'openbox']},
        {item => ["$editor ~/.config/openbox/autostart", 'Openbox Autostart',   'text-x-generic']},
        {item => ["$editor ~/.config/openbox/rc.xml",    'Openbox RC',          'text-x-generic']},
        {item => ["$editor ~/.config/openbox/menu.xml",  'Openbox Menu',        'text-x-generic']},
        {item => ['openbox --reconfigure',               'Reconfigure Openbox', 'openbox']},
        {item => ['openbox --restart',               'Restart Openbox', 'openbox']},
      {end => undef},
    {end => undef},
    
    


   
    ## The xscreensaver lock command
    #{item => ['xscreensaver-command -lock', 'Lock', 'system-lock-screen']},
    {item => ['~/.config/shutdown.sh', 'Quit', '/home/xsisec/.config/obmenu-generator/icons/5a284e6fec46e2093edaa3e4e92ae710.png']},

    ## This option uses the default Openbox's "Exit" action
    #{exit => ['Exit', 'application-exit']},
    #{exit => ['Quit', '~/.config/shutdown.sh']},

    ## This uses the 'oblogout' menu
    # {item => ['oblogout', 'Exit', 'application-exit']},
]
