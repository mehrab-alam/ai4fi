const fs = require('fs');
let c = fs.readFileSync('src/pages/client-showcase.tsx', 'utf-8');

// 1. ImageCard signature - add large prop
c = c.replace(
    'function ImageCard({ card, is4k, onImageClick }: { card: TestimonialCard; is4k?: boolean; onImageClick?: (s: string) => void }) {',
    'function ImageCard({ card, is4k, onImageClick, large }: { card: TestimonialCard; is4k?: boolean; onImageClick?: (s: string) => void; large?: boolean }) {'
);

// 2. TestimonialCardComponent signature - add large prop
c = c.replace(
    'function TestimonialCardComponent({ card }: { card: TestimonialCard }) {',
    'function TestimonialCardComponent({ card, large }: { card: TestimonialCard; large?: boolean }) {'
);

// 3. ImageCard wrapper div - change from break-inside-avoid to grid span
c = c.replace(
    '"break-inside-avoid mb-3 sm:mb-4"',
    '{large ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}'
);

// 4. ImageCard inner div - add h-full
c = c.replace(
    'showcase-card relative aspect-[3/4] w-full overflow-hidden rounded-xl ${is4k',
    'showcase-card relative aspect-[3/4] w-full h-full overflow-hidden rounded-xl ${is4k'
);

// 5. TestimonialCard wrapper div - change from break-inside-avoid to grid span
c = c.replace(
    '"break-inside-avoid mb-3 sm:mb-4"',
    '{large ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}'
);

// 6. TestimonialCard inner div - add h-full
c = c.replace(
    'showcase-card relative aspect-[3/4] w-full overflow-hidden rounded-xl cursor-pointer',
    'showcase-card relative aspect-[3/4] w-full h-full overflow-hidden rounded-xl cursor-pointer'
);

// 7. Section grid - change from CSS columns to CSS Grid
c = c.replace(
    '"columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4"',
    '"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-auto"'
);

// 8. Section items rendering - add large prop based on card.span
c = c.replace(
    '{section.items.filter(c => c.images.length > 0).map((card) =>\n\t\t\t\t\tcard.testimonial ? <TestimonialCardComponent key={card.id} card={card} /> : <ImageCard key={card.id} card={card} is4k={is4k} onImageClick={onImageClick} />\n\t\t\t\t)}',
    '{section.items.filter(c => c.images.length > 0).map((card) => {\n\t\t\t\t\tconst large = card.span === "tall" || card.span === "wide";\n\t\t\t\t\treturn card.testimonial\n\t\t\t\t\t\t? <TestimonialCardComponent key={card.id} card={card} large={large} />\n\t\t\t\t\t\t: <ImageCard key={card.id} card={card} is4k={is4k} onImageClick={onImageClick} large={large} />;\n\t\t\t\t})}'
);

// Try with \r\n line endings too
c = c.replace(
    '{section.items.filter(c => c.images.length > 0).map((card) =>\r\n\t\t\t\t\tcard.testimonial ? <TestimonialCardComponent key={card.id} card={card} /> : <ImageCard key={card.id} card={card} is4k={is4k} onImageClick={onImageClick} />\r\n\t\t\t\t)}',
    '{section.items.filter(c => c.images.length > 0).map((card) => {\r\n\t\t\t\t\tconst large = card.span === "tall" || card.span === "wide";\r\n\t\t\t\t\treturn card.testimonial\r\n\t\t\t\t\t\t? <TestimonialCardComponent key={card.id} card={card} large={large} />\r\n\t\t\t\t\t\t: <ImageCard key={card.id} card={card} is4k={is4k} onImageClick={onImageClick} large={large} />;\r\n\t\t\t\t})}'
);

fs.writeFileSync('src/pages/client-showcase.tsx', c);
console.log('All replacements applied!');
