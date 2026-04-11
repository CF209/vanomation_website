module Jekyll
  # Generates one Page per tutorial entry in _data/tutorials.yml.
  # This replaces the _tutorials/ collection so that the CMS can manage
  # both page content and nav order from a single file.
  class TutorialGenerator < Generator
    safe true
    priority :normal

    def generate(site)
      tutorials = site.data.dig('tutorials', 'tutorials') || []
      tutorials.each_with_index do |tutorial, index|
        page = PageWithoutAFile.new(site, site.source, '', "#{tutorial['slug']}.html")
        page.data.merge!(
          'layout'             => 'tutorial',
          'title'              => tutorial['title'],
          'permalink'          => "/#{tutorial['slug']}.html",
          'order'              => index + 1,
          'images'             => tutorial['images'] || [],
          'render_with_liquid' => false
        )
        page.content = tutorial['content'] || ''
        site.pages << page
      end
    end
  end
end
